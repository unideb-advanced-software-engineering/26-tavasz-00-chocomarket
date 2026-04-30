// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Esettanulmány",
          slug: "esettanulmany",
        },
        {
          label: "SRS",
          link: "/srs.doc",
        },
        {
          label: "Architekturális karakterisztikák",
          slug: "ac",
        },
        {
          label: "Architekturálisan szignifikáns követelmények",
          slug: "asr",
        },
        {
          label: "Architekturális stílus",
          slug: "as",
        },
        {
          label: "Döntési jegyzőkönyvek",
          autogenerate: { directory: "adr" },
        },
      ],
    }),
  ],
});
