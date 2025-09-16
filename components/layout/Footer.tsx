import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container>
        <div className="py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} – Portfolio
        </div>
      </Container>
    </footer>
  );
}
