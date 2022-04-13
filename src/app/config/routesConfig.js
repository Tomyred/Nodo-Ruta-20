import settingsRoutes from "../main/settings/settingsRoutes";
import homeRoutes from "../main/home/homeRoutes";
import linkConsoleRoutes from "../main/linkConsole/linkConsoleRoutes";
import radioStationRoutes from "../main/schedule/radioStation/radioStationRoutes";
import classroomRoutes from "../main/schedule/classroom/classroomRoutes";
import virtualClassroomRoutes from "../main/schedule/virtualClassroom/virtualClassroomRoutes";

const routes = [
    homeRoutes,
    settingsRoutes,
    linkConsoleRoutes,
    radioStationRoutes,
    classroomRoutes,
    virtualClassroomRoutes,
];

export default routes;
