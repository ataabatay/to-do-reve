import TextTruncate from 'react-text-truncate';
import { CircleMarker } from '../assets/Icons';

export default function ActiveToDoListView() {
  return (
    <section className="to-do-list-view flex flex-col gap-8 text-2xl w-2/4">
      <div className="single-to-do flex gap-4 items-center">
        <div className="bullet-marker">
          <CircleMarker color={'white'} />
        </div>
        <TextTruncate
          line={1}
          element="span"
          truncateText="..."
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis eius perspiciatis atque nulla dignissimos aperiam asperiores sequi, sed est nam, itaque enim aliquid explicabo, commodi aut totam fugiat nemo."
        />
      </div>
      <div className="single-to-do flex gap-4 items-center">
        <div className="bullet-marker">
          <CircleMarker color={'white'} />
        </div>
        <TextTruncate
          line={1}
          element="span"
          truncateText="..."
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis eius perspiciatis atque nulla dignissimos aperiam asperiores sequi, sed est nam, itaque enim aliquid explicabo, commodi aut totam fugiat nemo."
        />
      </div>
      <div className="single-to-do flex gap-4 items-center">
        <div className="bullet-marker">
          <CircleMarker color={'white'} />
        </div>
        <TextTruncate
          line={1}
          element="span"
          truncateText="..."
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis eius perspiciatis atque nulla dignissimos aperiam asperiores sequi, sed est nam, itaque enim aliquid explicabo, commodi aut totam fugiat nemo."
        />
      </div>
      <div className="single-to-do flex gap-4 items-center">
        <div className="bullet-marker">
          <CircleMarker color={'white'} />
        </div>
        <TextTruncate
          line={1}
          element="span"
          truncateText="..."
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis eius perspiciatis atque nulla dignissimos aperiam asperiores sequi, sed est nam, itaque enim aliquid explicabo, commodi aut totam fugiat nemo."
        />
      </div>
    </section>
  );
}
