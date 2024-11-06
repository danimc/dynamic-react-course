
# Guía Rápida de Conceptos

## JavaScript

En esta sección están los conceptos básicos de JavaScript que nos ayudaran a abordar mas fácilmente React.

### Declaración y Tipo de Variables

- **Tipos de Datos**: `string`, `number`, `boolean`, `null`, `undefined`, `object`, `symbol`.
- **Declaración de Variables**:
  - `var`: ***No recomendado*** - Modo legacy para declarar variables. Tiene alcance global o de función y puede ocasionar errores difíciles de depurar debido al hoisting.
  - `let`: ***Variables re-asignables*** - Bloque de alcance (scope). Ideal para variables cuyo valor cambia.
  - `const`: ***Constantes*** - Bloque de alcance, su valor no puede ser reasignado.

### Funciones

- **Funciones Normales**:

  ```javascript
  function saludo() {
    console.log("Hola");
  }
  ```

- **Arrow Functions**:

  ```javascript
  const saludo = () => console.log("Hola");
  ```

### Scope y Hoisting

- **Scope**: Alcance de variables (`global`, `local` o `de bloque`).
- **Hoisting**: Comportamiento de JavaScript que mueve declaraciones de variables y funciones al inicio de su contexto. `var` se eleva, pero `let` y `const` no permiten acceso antes de ser declarados.

### Manipulación de Arrays y Objetos

- **Métodos de Arrays**:
  - `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`
- **Objetos**:
  - Creación de objetos, acceso y modificación de propiedades (`dot notation` y `bracket notation`), `Object.assign`, desestructuración.

### Desestructuración y Spread Operator

- **Desestructuración**:

  ```javascript
  const { nombre, edad } = persona;
  ```

- **Operador Spread**:
  - Para copiar o combinar arrays y objetos: `...`

### Promesas y Async/Await

- **Promesas**: Estructura para manejar operaciones asincrónicas.

  ```javascript
  const promesa = new Promise((resolve, reject) => { /* ... */ });
  ```

- **Async/Await**: Sintaxis para escribir código asíncrono de forma más legible.

  ```javascript
  async function fetchData() {
    const data = await fetch(url);
  }
  ```

---

## TypeScript

TypeScript es un superconjunto de JavaScript que agrega tipado estático y otras características avanzadas. Estos son algunos conceptos básicos para ayudar a trabajar con TypeScript en React.

### Diferencias entre JavaScript y TypeScript

- **Tipado estático vs. tipado dinámico**: JavaScript es dinámico (las variables pueden cambiar de tipo), mientras que TypeScript permite declarar tipos explícitos.
- **Errores en tiempo de compilación**: TypeScript ayuda a capturar errores antes de ejecutar el código.

### Tipos de Datos en TypeScript

- **Tipos básicos**: `string`, `number`, `boolean`, `null`, `undefined`, `any`, `void`, `unknown`, `never`.
- **Tipos de Arrays**:

  ```typescript
  let nombres: string[] = ["Ana", "Luis"];
  let usuario: [string, number] = ["Carlos", 35];
  ```

- **Union y Alias**:

  ```typescript
  type ID = number | string;
  ```

### Interfaces y Tipos Personalizados

- **Interfaces**: Definen el contrato de un objeto.

  ```typescript
  interface Persona {
    nombre: string;
    edad: number;
  }
  ```

- **Tipos** (`type`): Similar a las interfaces, pero más flexibles para definir tipos complejos.

### Tipado de Funciones

- **Funciones con Tipos**:

  ```typescript
  const suma = (a: number, b: number): number => a + b;
  ```

### Módulos y Exportación/Importación

- **Importación y exportación de módulos**: Base para organizar el código.

  ```typescript
  export const mensaje = "Hola";
  import { mensaje } from "./modulo";
  ```

### Manejo de JSX con TypeScript

- **Tipado de Props**: Especificar los tipos para las propiedades de componentes React.

  ```typescript
  interface Props {
    titulo: string;
    isActive: boolean;
  }
  const MiComponente: React.FC<Props> = ({ titulo, isActive }) => {/*...*/}
  ```
