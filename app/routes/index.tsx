import {
  faMountainCity,
  faTreeCity,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getLatestOrders } from "../api/orders";
import { getUsersById } from "../api/users";
import LatestOrders from "../components/LatestOrders";
import MyProfileWidget from "../components/MyProfileWidget";
import styles from "../styling/runningtruck.module.css";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    const latestOrders = await getLatestOrders();
    const firstUser = await getUsersById(1);
    return {
      latestOrders,
      firstUser,
    };
  },
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  return (
    <>
      <div className="border-b-4 relative overflow-x-hidden">
        <FontAwesomeIcon
          className={"fa-bounce z-[100] " + styles.runningtruck}
          icon={faTruckArrowRight}
          size="lg"
          bounce
        />
        <div className="w-full absolute grid grid-cols-6 bottom-0 gap-10 ">
          <FontAwesomeIcon
            icon={faTreeCity}
            className="col-span-3 absolute left-1/2 bottom-0 z-0 text-[5rem] ml-10"
          />
          <FontAwesomeIcon
            icon={faMountainCity}
            className="text-5xl col-span-2 absolute left-10 z-[10] bottom-0 text-[8rem]"
          />
        </div>
      </div>
      <div className="p-20 grid grid-cols-2">
        <LatestOrders latestOrders={state.latestOrders} />
        {state.firstUser != null && <MyProfileWidget user={state.firstUser} />}
      </div>
    </>
  );
}
