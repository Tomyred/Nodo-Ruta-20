import React, { useState } from "react";
import Account from "./settingsComponents/account";
import PersonalInformation from "./settingsComponents/personalInformation";
import Security from "./settingsComponents/security";
import SettingsNavigation from "./settingsNavigation";

const ConfigurationPanel = () => {
    const [tabValue, setTabValue] = useState(1);

    const renderComponent = () => {
        if (tabValue === 0) {
            return <Account />;
        }
        if (tabValue === 1) {
            return <PersonalInformation />;
        }
        if (tabValue === 2) {
            return <Security />;
        }
    };

    const component = renderComponent();
    return (
        <div className="settings_component">
            <SettingsNavigation setTabValue={setTabValue} />
            {component}
        </div>
    );
};

export default ConfigurationPanel;
