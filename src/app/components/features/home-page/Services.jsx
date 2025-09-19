import ServicesCard from '../../ui/cards/ServicesCard';
import LinkButton from '../../ui/buttons/LinkButton';
import SectionHeaders from '../../ui/SectionHeaders';
import { servicesData } from '../../../../lib/data/home-page/servicesData';

const Services = () => {
  return (
    <div className="text-center py-10 bg-white flex flex-col items-center gap-6 px-6 md:px-10 lg:px-20">
      <SectionHeaders
        header={servicesData.sectionHeader.header}
        paragraph={servicesData.sectionHeader.paragraph}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {servicesData.services.map(service => (
            <ServicesCard
                key={service.id}
                img={service.image}
                header={service.header}
                paragraph={service.paragraph}
                features={service.features}
            >
                <LinkButton
                    title="დეტალები"
                    self='self-end'
                    href="/services"
                />
            </ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
