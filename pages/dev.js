import Router from "next/router";
import firebase from "firebase/app";
import React, { useState } from "react";
import "firebase/auth";
import initFirebase from "../services/firebase.js";
import { getRouteMatcher } from "next/dist/next-server/lib/router/utils";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();

export default function Dev() {
    const authorizing = useState("false");

    const handleAuthentication = async () => {
        await firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(token, user);
                Router.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Join</h1>
            <button onClick={handleAuthentication} loading={authorizing}>
                Log In
            </button>
        </div>
    );
}
