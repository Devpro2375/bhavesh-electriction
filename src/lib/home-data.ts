import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  Clock,
  Fan,
  Gauge,
  Home,
  MapPin,
  PhoneCall,
  Plug,
  ShieldCheck,
  Star,
  Store,
  type LucideIcon,
} from "lucide-react";
import { business, createWhatsappHref, serviceAreaNames } from "@/lib/business";

export type Service = {
  title: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "वायरिंग आणि स्विचबोर्ड",
    tag: "घर / फ्लॅट",
    description:
      "लूज कनेक्शन, जळालेला स्विच, नवीन पॉइंट किंवा शॉकची समस्या असेल तर तपासणी करून सुरक्षित दुरुस्ती.",
    image: "/images/optimized/service-wiring-switchboard.jpg",
    imageAlt: "भोसरीतील घराच्या wiring आणि switchboard repair कामाचा फोटो",
    icon: Plug,
    points: [
      "स्विच, सॉकेट, रेग्युलेटर",
      "नवीन पॉइंट आणि concealed wiring",
      "फ्यूज व load तपासणी",
    ],
  },
  {
    title: "MCB, ELCB आणि पॅनेल",
    tag: "सुरक्षा",
    description:
      "MCB वारंवार trip होत असेल, main बंद होत असेल किंवा board गरम होत असेल तर कारण शोधून योग्य उपाय.",
    image: "/images/optimized/service-mcb-panel.jpg",
    imageAlt: "MCB ELCB आणि electrical panel तपासणी सेवा",
    icon: ShieldCheck,
    points: ["MCB/ELCB/RCCB बदल", "मीटर आणि distribution board", "load balancing"],
  },
  {
    title: "फॅन, लाईट आणि फिटिंग",
    tag: "इंस्टॉलेशन",
    description:
      "Ceiling fan, LED panel, tube light, chandelier, exhaust fan आणि shop lighting स्वच्छ कामासह बसवून देतो.",
    image: "/images/optimized/service-fan-light.jpg",
    imageAlt: "फॅन आणि लाईट fitting करणाऱ्या electrician सेवेचा फोटो",
    icon: Fan,
    points: ["फॅन fitting आणि repair", "LED/spot light fitting", "holder, dimmer, tube light"],
  },
  {
    title: "इन्व्हर्टर, बॅटरी आणि अर्थिंग",
    tag: "बॅकअप",
    description:
      "इन्व्हर्टर लाइन, बॅटरी कनेक्शन, earthing आणि voltage check करून power backup नीट चालेल याची खात्री.",
    image: "/images/optimized/service-inverter-earthing.jpg",
    imageAlt: "इन्व्हर्टर बॅटरी आणि earthing electrical service",
    icon: BatteryCharging,
    points: ["इन्व्हर्टर connection", "बॅटरी terminal service", "earthing आणि voltage check"],
  },
  {
    title: "दुकान, ऑफिस आणि सोसायटी",
    tag: "दुकान / ऑफिस",
    description:
      "दुकानाचे पॉइंट, ऑफिस wiring, सोसायटी common lights, pump starter आणि routine maintenance साठी visit.",
    image: "/images/optimized/service-shop-society.jpg",
    imageAlt: "दुकान ऑफिस आणि सोसायटी electrical maintenance service",
    icon: Building2,
    points: ["दुकान/ऑफिस wiring", "common area lights", "maintenance visit"],
  },
  {
    title: "24 तास तातडीची दुरुस्ती",
    tag: "तत्काळ",
    description:
      "रात्री लाईट गेली, burning smell आली, sparking sound येत असेल किंवा main बंद झाला तर लगेच फोन करा.",
    image: "/images/optimized/service-emergency-repair.jpg",
    imageAlt: "24 तास emergency electrician repair service",
    icon: Clock,
    points: ["फोनवर प्राथमिक मार्गदर्शन", "तात्काळ visit", "सुरक्षित temporary fix"],
  },
];

export const quickFacts = [
  { label: "सेवा वेळ", value: "24 तास उपलब्ध", icon: Clock },
  { label: "मुख्य परिसर", value: "भोसरी, PCMC, पुणे", icon: MapPin },
  {
    label: "Google reviews",
    value: `${business.ratingValue} / ${business.reviewCount} reviews`,
    icon: Star,
  },
  { label: "थेट फोन", value: business.phoneDisplay, icon: PhoneCall },
];

export const personalSignals = [
  "Bhavesh स्वतः phone उचलतो",
  "भोसरी base, Pune-PCMC visit",
  "पहिले problem समजून घेतो",
  "कामानंतर safety check",
  "Emergency साठी 24 तास call",
  "Adarsh Nagar पासून जलद visit",
];

export const workSteps = [
  {
    title: "समस्या आधी नीट समजून घेतो",
    description:
      "कुठे trip होत आहे, smell किंवा sound आहे का, कोणत्या भागात visit हवी आहे हे फोनवर विचारतो.",
    icon: PhoneCall,
  },
  {
    title: "तपासणी करून खर्च सांगतो",
    description:
      "Tester, meter आणि load check करून काम सुरू करण्यापूर्वी अंदाज स्पष्ट सांगितला जातो.",
    icon: Gauge,
  },
  {
    title: "कामानंतर final safety check",
    description:
      "बोर्ड, MCB, fitting किंवा earthing पुन्हा तपासून जागा स्वच्छ ठेवली जाते.",
    icon: CheckCircle2,
  },
];

export const serviceAreas = serviceAreaNames;

export const localUseCases = [
  {
    title: "घर",
    description: "फ्लॅट, row house, kitchen points, geyser, fan आणि lights.",
    icon: Home,
    color: "#a6531d",
  },
  {
    title: "दुकान / ऑफिस",
    description: "counter points, signage, AC line आणि lighting setup.",
    icon: Store,
    color: "#2f6f9f",
  },
  {
    title: "सोसायटी",
    description: "common lights, panel check, pump starter आणि maintenance.",
    icon: Building2,
    color: "#203954",
  },
];

export const getServiceWhatsappHref = (serviceTitle: string) =>
  createWhatsappHref(
    `नमस्कार Bhavesh Electrician, मला "${serviceTitle}" या सेवेसाठी enquiry करायची आहे. मी भोसरी/पुणे परिसरातून संपर्क करत आहे.`,
  );
