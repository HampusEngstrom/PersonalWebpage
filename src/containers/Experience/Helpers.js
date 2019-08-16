const formatTime = time =>
  isNaN(time) ? time : `${time.substr(0, 4)}/${time.substr(4, 2)}`;

const formatPeriod = obj => ({
  start: formatTime(obj.start),
  end: formatTime(obj.end),
  label: obj.project ? obj.projectRole : obj.entityTitle,
  title: obj.project ? obj.projectType : `${obj.entity}, ${obj.location}`,
  project: !!obj.project,
  description: obj.description
});

const formatData = data =>
  [...data]
    .reverse()
    .reduce(
      (acc, obj) => [
        ...acc,
        obj,
        ...[...obj.projects].reverse().map(p => ({ ...p, project: true }))
      ],
      []
    )
    .map(formatPeriod);

export { formatData, formatTime, formatPeriod };
