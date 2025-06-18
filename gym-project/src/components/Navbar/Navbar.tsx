import { Burger, Container, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import classes from "./Navbar.module.css";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner} size={"xl"}>
        <Image
          src={
            "https://lh3.googleusercontent.com/p/AF1QipOx-WjoY0QusSQhLo4ZOlisnDJjSe8a2NOvAPc4=s680-w680-h510-rw"
          }
          className={classes.logo}
        />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
export default Navbar;
