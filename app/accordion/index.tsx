import Accordion from "../components/ui/custom/accordion";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";
import { FAQs } from "../data";

export default function AccordionScreen() {
  return (
    <ScreenWrapper>
      {FAQs.map((faq, idx) => (
        <Accordion key={idx} title={faq.title} description={faq.description} />
      ))}
    </ScreenWrapper>
  );
}
