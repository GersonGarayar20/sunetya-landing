interface Link {
  title: string;
  href?: string;
  items?: Item[];
}

interface Item {
  title: string;
  href: string;
}

export const enlaces: Link[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Servicios",
    items: [
      {
        title: "Servicios",
        href: "/",
      },
      {
        title: "Consultoría",
        href: "/consultoria",
      },
      {
        title: "Desarrollo",
        href: "/desarrollo",
      },
      {
        title: "Marketing",
        href: "/marketing",
      },
    ],
  },
];
