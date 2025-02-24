export const vertexShader = ` void main() {
            gl_Position = vec4(position, 1.0);
          }`;
export const fragmentShader = `#define TWO_PI 6.2831853072
  #define PI 3.14159265359
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform vec2 center; // центр анимации
  uniform float scale;  // новый uniform для масштабирования

  void main(void) {
    // Используем uniform scale вместо фиксированного 2.0
    vec2 uv = (gl_FragCoord.xy - center) * scale / min(resolution.x, resolution.y);
    float t = time * 0.05;
    float lineWidth = 0.002;
    vec3 color = vec3(0.0);
    for (int j = 0; j < 3; j++){
      for (int i = 0; i < 5; i++){
        color[j] += lineWidth * float(i * i) /
                    abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 -
                        length(uv) + mod(uv.x + uv.y, 0.2));
      }
    }
    gl_FragColor = vec4(color, 1.0);
  }`;
