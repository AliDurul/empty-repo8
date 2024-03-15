import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`flex justify-center flex-wrap w-full gap-x-16 gap-y-8`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} rounded-[20px] sm:min-w-[192px] min-w-[170px]  flex justify-between flex-col client-card px-6 py-5 `}> {/* sm:mt-0 mt-5 md:mr-10 sm:mr-5 mr-4  */}
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[200px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite my-5">
            {client.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
