export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="container-x flex flex-col items-center justify-between gap-2 text-sm text-ink/55 sm:flex-row">
        <p className="font-semibold text-ink">Mohak Jha</p>
        <p>Health Assistant · Nepal</p>
        <p>© {new Date().getFullYear()} Mohak Jha</p>
      </div>
    </footer>
  );
}