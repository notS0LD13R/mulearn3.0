
import SkillsAndChances from '../../Components/CarrersComponents/SkillsAndChances/SkillsAndChances';

const cardData: {
  title: string,
  description: string,
  image: string,
  badges: string[],
}[] = [
  {
    title: "Visual ONeSigner",
    description:
      "We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.",
    image: "https://placehold.co/90",
    badges: ["Adoe Suite", "Sketch"],
  },
  {
    title: "Visual Designer",
    description:
      "We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.",
    badges: ["Adoe Suite", "Sketch"],
    image: "https://placehold.co/90",
  },
  {
    title: "Visual Designer",
    description:
      "We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.",
    badges: ["Adoe Suite", "Sketch"],
    image: "https://placehold.co/90",
  },
  {
    title: "Visual Designer",
    description:
      "We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.",
    badges: ["Adoe Suite", "Sketch"],
    image: "https://placehold.co/90",
  },
  {
    title: "Visual Dedsigner",
    description:
      "We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.",
    badges: ["Adoe Suite", "Sketch"],
    image: "https://placehold.co/90",
  },
];

const Carrers = () => {
  return (
    <div>
      <SkillsAndChances cardData={cardData} />
    </div>
  );
}

export default Carrers
