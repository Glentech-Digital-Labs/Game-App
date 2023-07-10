function SummeryComponent({ label_1, data_1, label_2, data_2 }) {
  return (
    <>
      <div className="tw-flex tw-justify-between tw-py-2">
        <div className="tw-flex">
          <p>{label_1}</p>
          <div>: {data_1}</div>
        </div>
        <div className="tw-flex">
          <p>{label_2}</p>
          <div>: {data_2}</div>
        </div>
      </div>
    </>
  )
}

export default SummeryComponent
