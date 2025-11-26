---
name: Default Task Issue
about: Use this template to get an idea of what should include a Task Issue
title: 'Feat/Fix: Implementar...'
labels: task
assignees: ''

---

## Contexto

Necesitamos [desarrollar/ajustar] la funcionalidad de... para permitir que el usuario...

Relacionado con: **Epic #[Numero]**

---

## Especificaciones Técnicas

* **Ruta/Página:** `/dashboard/profile`
* **Acceso:** `[Público / Requiere Auth / Requiere Admin]`
* **Componentes:** `[NombreComponente]`
* **Figma/Diseño:** *Pegar link aquí*

---

## Input (Props)

```json
{
  "campo": "tipo_dato",
  "ejemplo": "valor"
}
```

---

## Output (Visual)

### Caso de Éxito

Se visualiza el componente referenciado en Figma

### Casos de Error

* **Error 4xx:** Mensaje esperado...
* **Estado de Carga:** Mostrar spinner mientras...
* **Estado Vacío:** Si no hay datos, mostrar...

---

## Criterios de Aceptación (Definition of Done)

* [ ] La funcionalidad cumple con las especificaciones técnicas.
* [ ] Se han manejado los casos de error descritos.
* [ ] El componente es responsive (Mobile/Desktop).
* [ ] El código pasa el linter y no rompe tests existentes.

---

## Notas de Implementación

* Investigar librería X para...
* Recordar no exponer datos sensibles en el log...
