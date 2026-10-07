# Architecture Rules

- Reuse `BoxModelShowcasePage` for bespoke box-model pages so their product layout, local-service content, gallery, and WhatsApp actions remain consistent.
- Use typed TanStack Links for internal carousel destinations and anchors only for external destinations, keeping product navigation separate from WhatsApp actions.