import Link from 'next/link';
import PageHero from '../../components/PageHero';

function ServiceVan() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Van builds for contractors and delivery fleets requiring organized mobile workspaces."
        media="/bi-assets/images/BI-15.jpg"
        mediaAlt="Commercial service van build for contractors and delivery fleets"
        mediaNote="Service Van"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Service Van"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Van builds for contractors and delivery fleets requiring organized mobile workspaces.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your service van layout, shelving, equipment storage, and fleet configuration needs.
            </p>
            <Link className="btn-primary mt-8 inline-flex" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceVan;