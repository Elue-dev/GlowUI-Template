import React from "react";
import { Text, View } from "react-native";
import { Accordion as UIAccordion } from "../lib/accordion/accordion";
import { AccordionContent } from "../lib/accordion/accordion-content";
import { AccordionItem } from "../lib/accordion/accordion-item";
import { AccordionTrigger } from "../lib/accordion/accordion-trigger";

interface AccordionProps {
  title: string;
  description: string;
}

export default function Accordion({ title, description }: AccordionProps) {
  return (
    <UIAccordion className="space-y-1">
      <AccordionItem className="border border-gray-800 rounded-lg overflow-hidden">
        <AccordionTrigger className="px-6 py-4 hover:bg-gray-900/50">
          <Text className="text-white text-[16px] font-medium">{title}</Text>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 bg-gray-900/30 border-t border-gray-800">
          <View className="ml-3">
            <Text className="text-gray-300 text-md leading-6">
              {description}
            </Text>
          </View>
        </AccordionContent>
      </AccordionItem>
    </UIAccordion>
  );
}
