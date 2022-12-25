import moment from "moment/moment";
import DateTime from "./DateTime";

export default function DateTimePretty(props) {
  const date = moment(props.date).fromNow();
  return <DateTime date={date} />
}