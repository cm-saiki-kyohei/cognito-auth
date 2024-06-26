import React from 'react';

interface GrafanaDashboardProps {
    token: string;
}

const GrafanaDashboard: React.FC<GrafanaDashboardProps> = ({ token }) => {
    const GRAFANA_URL = import.meta.env.VITE_GRAFANA_URL;
    const DASHBOARD_UID = import.meta.env.VITE_DASHBOARD_UID;
    const DASHBOARD_SLUG = import.meta.env.VITE_DASHBOARD_SLUG;

    const buildIframeSrc = (token: string): string => {
        return `${GRAFANA_URL}/d-solo/${DASHBOARD_UID}/${DASHBOARD_SLUG}?orgId=1&from=now-6h&to=now&panelId=1&auth_token=${token}`;
    };

    return (
        <div>
            <h2>Grafana Dashboard</h2>
            <iframe
                src={buildIframeSrc(token)}
                title="Grafana Dashboard"
                width="450"
                height="200"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default GrafanaDashboard;
