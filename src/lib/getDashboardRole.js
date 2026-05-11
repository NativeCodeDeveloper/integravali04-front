export async function getDashboardRole() {
    // Acceso liberado: evita depender de Clerk en el render del dashboard.
    return "admin";
}
