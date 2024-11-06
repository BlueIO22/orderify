import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";
import { User } from "../api/users";
import WidgetLayout from "./shared/Layout";

export default function MyProfileWidget({ user }: { user: User }) {
  return (
    <WidgetLayout>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">My profile</h1>
        <Link to="/user">View my profile</Link>
      </div>
      <div className="mt-2 flex gap-5">
        <img
          src={user.profile_image}
          className="h-[100px]"
          alt={user.firstName + " sitt profilbilde"}
        />
        <div className="text-xl">
          <h2 className="text-2xl italic">
            {user.firstName} {user.lastName}
          </h2>
          <p>
            <FontAwesomeIcon size="xs" icon={faEnvelope} /> {user.email}
          </p>
        </div>
      </div>
    </WidgetLayout>
  );
}
