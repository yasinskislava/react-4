import css from "./Statistics.module.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Statistics({ title, stats: { info } }) {
  
    const list = info.map(it => {
        const id = "id" + Math.random().toString(16).slice(2);
        return (
          <li style={{backgroundColor: getRandomColor()}} className={ css.item } key={id}>
            <span className="label">{it.name}</span>
            <span className="percentage">{it.percentage}%</span>
          </li>
        );
    });
    if (title) {
        return (
          <section className={ css.statistics }>
            <h2 className="title">{ title }</h2>
            <ul className={ css.statList }>{list}</ul>
          </section>
        );
    }
    else {
        return (
          <section className={ css.statistics }>
            <ul className={ css.statList }>{list}</ul>
          </section>
        );
    }
    
}