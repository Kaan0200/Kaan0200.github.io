import type { AppShell } from "./app-shell";
import type { CardGallery } from "./elements/card-gallery";
import type { ProjectCard } from "./elements/project-card";

declare global {
  interface HTMLElementTagNameMap {
    "project-card": ProjectCard;
    "card-gallery": CardGallery;
    "app-shell": AppShell;
  }
}
