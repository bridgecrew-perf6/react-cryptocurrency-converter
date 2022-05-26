import s from './image.module.scss';

interface IImage {
  src: string;
  alt: string;
}

function Image({ src, alt }: IImage) {
  return (
    <div className={s.image}>
      <img className={s.image__img} src={src} alt={alt} />
    </div>
  );
}

export default Image;
