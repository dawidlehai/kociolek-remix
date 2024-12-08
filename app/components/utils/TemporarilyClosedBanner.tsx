interface Props {
  dateStart: Date;
  dateEnd: Date;
  message: string;
}

export default function TemporarilyClosedBanner({
  dateStart,
  dateEnd,
  message,
}: Props) {
  const today = new Date();

  if (today >= dateStart && today <= dateEnd) {
    return <p className="closed-banner">{message}</p>;
  }

  return null;
}
