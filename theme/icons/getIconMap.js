import * as FaIcons from "@fortawesome/free-solid-svg-icons";
import * as FaBrandIcons from "@fortawesome/free-brands-svg-icons";

const getIconMap = () =>
  [FaIcons, FaBrandIcons].reduce(
    (outerMap, list) => ({
      ...outerMap,
      ...Object.keys(list).reduce((map, key) => {
        if (key !== "fas" && key !== "prefix") {
          return {
            ...map,
            [list[key].iconName]: list[key],
          };
        }
        return map;
      }, {}),
    }),
    {}
  );

export default getIconMap;
