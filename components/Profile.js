import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";

function Email({ rawemail }) {
    if (rawemail != null) {
        return (
            <div className="column">
                <a
                    onClick={
                        (() => navigator.clipboard.writeText(rawemail),
                        () =>
                            alert(
                                "Email: " +
                                    rawemail +
                                    " has been copied to your clipboard."
                            ))
                    }>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Discord({ rawdiscord }) {
    if (rawdiscord != null) {
        return (
            <div className="column">
                <a
                    onClick={
                        (() => navigator.clipboard.writeText(rawdiscord),
                        () =>
                            alert(
                                "Discord: " +
                                    rawdiscord +
                                    " has been copied to your clipboard."
                            ))
                    }>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={fab.faDiscord}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Github({ rawgithub }) {
    if (rawgithub != null) {
        return (
            <div className="column">
                <a target="_blank" rel="noopener noreferrer" href={rawgithub}>
                    <span className="icon">
                        <FontAwesomeIcon
                            className="fa-lg"
                            icon={fab.faGithub}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        );
    } else {
        return null;
    }
}

function Profile({ name, position, origin, picture, email, discord, github }) {
    return (
        <div className="column is-one-third-widescreen is-one-third-desktop is-half-tablet">
            <div className="is-profile">
                <LazyLoad once="true">
                    <img
                        className="is-profile-picture"
                        src={picture}
                        alt={name}
                    />
                </LazyLoad>

                <div className="is-profile-text">
                    <p className="is-profile-name">{name}</p>
                    <p className="is-profile-origin">{origin}</p>
                    <p className="is-profile-position">{position}</p>
                </div>
                <div className="is-profile-contact">
                    <div className="columns is-profile-contact-columns is-centered is-mobile">
                        <Email rawemail={email} />
                        <Discord rawdiscord={discord} />
                        <Github rawgithub={github} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
