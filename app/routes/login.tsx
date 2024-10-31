import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { useState } from "react";
import { login } from "../api/users";

export const Route = createFileRoute("/login")({
  component: () => {
    const [error, setError] = useState(false);
    const loginUser = createServerFn("POST", async (formData: FormData) => {
      const response = await login(
        formData.get("username"),
        formData.get("password")
      );

      return response;
    });
    return (
      <div className="p-20 ">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-lg">To use our solution you need to login</p>
        <form
          method="POST"
          onSubmit={async (event) => {
            event?.preventDefault();
            const formData = new FormData(event.target);
            const response = await loginUser(formData);

            if (response.session == null && response.user == null) {
              setError(true);
              return;
            }

            if (response.session) {
              localStorage.setItem("session", JSON.stringify(response.session));
            }
          }}
          className="flex flex-col w-[500px] pt-5 [&>div]:flex [&>div]:flex-col [&>div]:mb-5 [&>div>label]:text-2xl [&>div>input]:text-xl [&>div>input]:p-2  [&>div>input]:border-2"
        >
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="epost..."
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete=""
            />
          </div>
          <button className="border-2 p-2 text-lg hover:bg-primary hover:text-white">
            Login
          </button>
        </form>
        {error && <p>Ugyldig brukernavn eller passord</p>}
      </div>
    );
  },
});
