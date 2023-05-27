import styles from "../styles";
const NewFeatures = ({imgUrl,title,subtitle}) => (
  <div className="flex flex-col flex-1 sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
  <img
  src={imgUrl}
  alt="icon"
  className="h-1/2 w-1/2 object-contain"
  />
   </div>
  <h1 className="mt-[26px] text-[24px] leading-[30px] font-bold text-white">Title{title}</h1>
  <p className="flex-1 mt-[16px] font-normal text-[15px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
   
  </div>
);

export default NewFeatures;
