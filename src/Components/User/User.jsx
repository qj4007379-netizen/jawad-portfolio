import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { Userid } = useParams();

  return <div className="bg-green-400">User: {Userid}</div>;
}
