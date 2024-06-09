import { Instagram } from "lucide-react";

export const features = [
  {
    heading: () => {
      return (
        <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
          <span className="text-yellow-500">Lightning</span>-Fast delivery
        </h1>
      );
    },
    description:
      "Receive your orders in record time with our reliable and efficient delivery service. We ensure a hassle-free shopping experience, so you can enjoy your purchases sooner.",
    image: "https://example.com/images/fast-delivery.jpg",
  },
  {
    heading: () => (
      <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
        Speedy Shipping
      </h1>
    ),
    description:
      "Get your purchases delivered quickly to your doorstep. Our logistics team ensures your orders are processed and shipped without delay, guaranteeing satisfaction with every order.",
    image: "https://example.com/images/quick-delivery.jpg",
  },
  {
    heading: () => (
      <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
        Wide range of products
      </h1>
    ),
    description:
      "Explore a vast selection, from dairy products to snacks, gas, cleaning supplies, dry foods, and fresh groceries all in one place. We cater to all your household needs.",
    image: "https://example.com/images/variety-of-products.jpg",
  },
  {
    heading: () => (
      <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
        Over 6000+ items in stock
      </h1>
    ),
    description:
      "Enjoy a diverse inventory with thousands of products available, ensuring you'll find what you're looking for. Our extensive range means more choices for you.",
    image: "https://example.com/images/6000-items.jpg",
  },
  {
    heading: () => (
      <h1 className="font-vest-b tracking-tighter text-3xl md:text-5xl lg:text-7xl lg:max-w-lg ">
        Personalized order assistance
      </h1>
    ),
    description:
      "Give us a call and we'll handle your order. Our customer service team is here to assist with any inquiries or special requests, providing a personalized shopping experience.",
    image: "https://example.com/images/call-order.jpg",
  },
];

export const TestimonialsData = [
  {
    message:
      "The app is excellent it has nice security features easy to access and customer support is excellent",
    user: "ZAKARIA ISSAK",
  },
  {
    message: "Orders on time it's far better than the others",
    user: "Abdulkhalaq",
  },
];

export const socialLinks = [
  {
    social: "Instagram",
    icon: () => <Instagram className="size-5" />,
    link: "",
  },
  {
    social: "Twitter",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 72 72"
        viewBox="0 0 72 72"
        id="twitter-x"
        className="size-5"
      >
        <switch>
          <g>
            <path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66    h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z" />
          </g>
        </switch>
      </svg>
    ),
    link: "",
  },
  {
    social: "Tiktok",
    icon: () => (
      <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="tiktok">
        <path d="M6.977 15.532a2.791 2.791 0 0 0 2.791 2.792 2.859 2.859 0 0 0 2.9-2.757L12.7 3h2.578A4.8 4.8 0 0 0 19.7 7.288v2.995a4.676 4.676 0 0 1-.443.022 4.8 4.8 0 0 1-4.02-2.172v7.4a5.469 5.469 0 1 1-5.469-5.469c.114 0 .226.01.338.017v2.7a2.909 2.909 0 0 0-.338-.034 2.791 2.791 0 0 0-2.791 2.785Z" />
      </svg>
    ),
    link: "",
  },
];
