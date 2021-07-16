import * as React from "react";
import styles from "./index.module.css";

const tmp_setting = {
    title: "👋 It's time for some nice cookies",
    description:
        "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",
    primary_btn: {
        text: "Accept all",
        role: "accept_all", //'accept_selected' or 'accept_all'
    },
    secondary_btn: {
        text: "Manage preferences",
        role: "settings", //'settings' or 'accept_necessary'
    },
    settings_modal: {
        title: 'Cookie preferences',
        save_settings_btn: "Save current selection",
        accept_all_btn: "Accept all",
        close_btn_label: "Close",
        cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expiration" },
        ],
    },
};

export default function CookieConsent(props) {
    return (
        <>
            <div className={styles["main_container"]} id="cc--main">
                <div className="overlay">overlay</div>
                <div id="cc_div" class="cc_div">
                    <div className={styles["consent_modal"]}>
                        <div className={styles["consent_modal_inner"]}>
                            <div
                                className={styles["consent_modal_inner_inner"]}
                            >
                                <div className={styles["consent_title"]}>
                                    {tmp_setting.title}
                                </div>
                                <div className={styles["consent_text"]}>
                                    {tmp_setting.description}
                                </div>
                            </div>
                            <div className={styles["consent_buttons"]}>
                                <button
                                    className={styles["consent_primary_btn"]}
                                >
                                    {tmp_setting.primary_btn.text}
                                </button>
                                <button
                                    className={styles["consent_secondary_btn"]}
                                >
                                    {tmp_setting.secondary_btn.text}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["settings_container"]}>
                        <div className={styles["settings_container_valign"]}>
                            <div className={styles["settings"]}>
                                <div
                                    className={
                                        styles["settings_container_inner"]
                                    }
                                >
                                    <div className={styles["settings_inner"]}>
                                        <div
                                            className={
                                                styles["settings_header"]
                                            }
                                        >
                                            <div
                                                className={
                                                    styles["settings_title"]
                                                }
                                            >
                                                {/* TODO: add ref to creator @nexo-tec on subtitle*/}
                                                {tmp_setting.settings_modal.title}
                                            </div>
                                            <div className={styles["settings_close_btn_container"]}>
                                                <button className="settings_close_btn"> X </button>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles["settings_blocks"]
                                            }
                                        >
                                            
                                        </div>
                                        <div
                                            className={
                                                styles["settings_buttons"]
                                            }
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}