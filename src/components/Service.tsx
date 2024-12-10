import { motion } from "framer-motion";
import { services } from "../data/services";
import SectionLayout from "./layout/SectionLayout";
const Service = () => {
  return (
    <SectionLayout
      id={"service"}
      title={"Service"}
      description={
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    >
      {({ isInView }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-50 shadow-lg px-6 py-4 rounded-md space-y-3"
              >
                <img
                  src={service.url}
                  alt={service.title}
                  width={120}
                  height={100}
                  className="mx-auto"
                />
                <span className="font-semibold text-2xl">{service.title}</span>
                <p>{service.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </SectionLayout>
  );
};
export default Service;
