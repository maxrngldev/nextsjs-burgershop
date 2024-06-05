export default function DetailsPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <p>Details page working, id: {params.id}</p>
    </main>
  );
}
