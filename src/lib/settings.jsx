import styles from "./index.module.css"; //TODO: on @css: finish the implement of animations, and add useState(?) variables for animation state 

const tmp_setting = {
    settings_modal: {
        title: "Cookie preferences",
        save_settings_btn: "Save current selection",
        accept_all_btn: "Accept all",
        close_btn_label: "Close",
        cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expiration" },
        ],
    },
    blocks: {
        title: "Cookie usage",
        description: "description here",
    },
    blocks_section: {
        b1: {
            title: "title of b1 here",
            description: "description of b1 here",
        },
        b2: {
            title: "title of b2 here",
            description: "description of b2 here",
        },
        b3: {
            title: "title of b3 here",
            description: "description of b3 here",
        },
    },
};

export default function CookieConsentSettings(props) {
    return (
        <>
            <div className={styles["settings_container"]}>
                <div className={styles["settings_container_valign"]}>
                    <div className={styles["settings"]}>
                        <div className={styles["settings_container_inner"]}>
                            <div className={styles["settings_inner"]}>
                                <div className={styles["settings_header"]}>
                                    <div className={styles["settings_title"]}>
                                        {/* TODO: add ref to creator @nexo-tec on subtitle*/}
                                        {tmp_setting.settings_modal.title}
                                    </div>
                                    <div
                                        className={
                                            styles[
                                                "settings_close_btn_container"
                                            ]
                                        }
                                    >
                                        <button className="settings_close_btn">
                                            {" "}
                                            X{" "}
                                        </button>
                                    </div>
                                </div>
                                <div className={styles["settings_blocks"]}>
                                    <div className={styles["block_section"]}>
                                        <div className={styles["title"]}>
                                            {tmp_setting.blocks.title}
                                        </div>

                                        <div className={styles["desc"]}>
                                            <div className={styles["p"]}>
                                                {tmp_setting.blocks.description}
                                            </div>
                                        </div>
                                    </div>
                                    {/* //TODO: implement map of object here to render all block sections, for hour isn't implemented */}
                                    <div
                                        className={styles["block_section"]}
                                    ></div>
                                </div>
                                <div
                                    className={styles["settings_buttons"]}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
