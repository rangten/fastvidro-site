# Architecture Rules

- Reuse `BoxModelShowcasePage` for bespoke box-model pages so their product layout, local-service content, gallery, and WhatsApp actions remain consistent.
- Use typed TanStack Links for internal carousel destinations and anchors only for external destinations, keeping product navigation separate from WhatsApp actions.
- Keep the existing door model URL when renaming its display name, and supply optional photo galleries through PortaSeoPage to preserve shared page layouts.
- Maintain the dedicated LED mirror experience at the existing /espelhos-led URL and expose it through the Espelhos menu with hover, keyboard focus, and mobile access to preserve public navigation.