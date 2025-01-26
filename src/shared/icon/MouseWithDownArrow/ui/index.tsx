import Image from 'next/image';
const mouseWithDownArrow = '/img/mock/mouseWithDownArrow.png';

type Props = {
  className?: string;
  width: number;
  height: number;
};

const MouseWithDownArrow = ({ className, width, height }: Props) => {
  return (
    <Image
      src={mouseWithDownArrow}
      alt="scroll down icon"
      width={width}
      height={height}
      style={{ width, height }}
      className={className}
    />
  );
};

export default MouseWithDownArrow;
