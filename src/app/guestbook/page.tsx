"use client";

import { useQuery } from "@tanstack/react-query";

import { CreateMessage } from "@/components/create-message";
import { api } from "@/server/treaty";
import { formatCreationDate } from "@/lib/utils";
import { useSession } from "next-auth/react";

export default function Guestbook() {
  const { data: session } = useSession();
  const { data: messages, isPending } = useQuery({
    queryKey: ["getAllMessages"],
    queryFn: () => api.guestbook.all.get(),
  });

  return (
    <article className="max-w-prose mx-auto mt-10">
      <div>
        <h1 className="text-4xl text-purple-300">Guestbook</h1>
        <p>
          Please feel free to leave a comment now that you have found this page!
        </p>
      </div>

      {session && <CreateMessage />}

      <div className="mt-5">
        {!isPending ?
          messages?.data &&
          messages?.data.map((message) => (
            <div key={message.id} className="pb-4 w-full">
              <div className="flex flex-row justify-between">
                <div className="w-2/3">
                  <p className="text-lg">{message.message}</p>
                  <h1 className="text-xl text-purple-300">
                    <span className="italic">&#8211; </span>
                    {message.createdBy.name}
                  </h1>
                </div>
                <p className="text-xs md:text-sm text-neutral-400">
                  {formatCreationDate(message.createdAt)}
                </p>
              </div>
            </div>
          )) : <p>Loading...</p>}
      </div>
    </article>
  );
}
