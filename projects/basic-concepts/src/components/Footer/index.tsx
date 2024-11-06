interface FooterProps {
  counter: number
}

export default function Footer({ counter = 0 }: FooterProps) {
  return (
    <footer>
      <p>
        Has presionado <strong>{counter}</strong> veces el botón de arriba
      </p>
    </footer>
  )
}
