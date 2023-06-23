import data, { TimelineEvent } from "../data";

export default function Experience() {
  return (
    <>
      <div>
        <h3>Relevant Experience</h3>
        {data
          .filter((t) => t.type === TimelineEvent.JOB && !t.notRelevant)
          .map((job) => {
            const today = new Date().toLocaleDateString(undefined, {
              month: "long",
              year: "numeric",
            });

            return {
              ...job,
              timelineStart: job.timelineStart.toLocaleDateString(undefined, {
                month: "long",
                year: "numeric",
              }),
              timelineEnd:
                job.timelineEnd.toLocaleDateString(undefined, {
                  month: "long",
                  year: "numeric",
                }) === today
                  ? "Present"
                  : job.timelineEnd.toLocaleDateString(undefined, {
                      month: "long",
                      year: "numeric",
                    }),
            };
          })
          .map((exp) => (
            <div>
              <h2>
                {exp.title} | {exp.place} | {exp.timelineStart} -{" "}
                {exp.timelineEnd}
              </h2>
              <p>{exp.description}</p>
            </div>
          ))}
      </div>

      <div>
        <h3>Education</h3>
        {data
          .filter((t) => t.type === TimelineEvent.QUALIFICATION)
          .map((exp) => {
            const start = new Date(exp.timelineStart);
            const end = new Date(exp.timelineEnd);
            return (
              <div>
                <h2>
                  {exp.title} | {exp.place} | {start.toLocaleDateString()} -{" "}
                  {end.toLocaleDateString()}
                </h2>
                <p>{exp.description}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
