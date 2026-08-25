"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/data/site";
import { MusicNoteIcon, UserOutlineIcon } from "./icons";

export function RequestForm() {
  const [song, setSong] = useState("");
  const [name, setName] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const s = song.trim();
    const n = name.trim();
    const msg =
      "Track request for The Master Radio: " + (s || "(no track given)") + (n ? " — from " + n : "");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="reqcard" id="request">
      <div className="mic">🎤</div>
      <h3>REQUEST A TRACK</h3>
      <p>What do you want to hear?</p>
      <form onSubmit={submit}>
        <div className="field">
          <MusicNoteIcon />
          <input
            id="song"
            type="text"
            placeholder="Artist / Song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
        </div>
        <div className="field">
          <UserOutlineIcon />
          <input
            id="name"
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="send" type="submit">
          ➤ SEND REQUEST
        </button>
      </form>
      <a
        className="shout"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20a%20shout-out%20on%20The%20Master%20Radio!`}
        target="_blank"
        rel="noopener"
      >
        💬 WANT A SHOUT-OUT? ADD ONE →
      </a>
    </div>
  );
}
