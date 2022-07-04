import { LitElement,css,html } from 'lit';

export class ChasingElemnt extends LitElement {
    static styles = [css`
html, body { 
  height: 100%; 
  margin: 0; 
  background: #261c33; 
  overflow: hidden; 
  display: flex; 
  align-items: center; 
  justify-content: center 
}
    `
    ];
    render() {
        return html`
        <div>
        <css-doodle>
  :doodle {
    @grid: 45x1 / 40vmin;
    position: relative;
    z-index: 1; 
  }
  :container {
    transform: translate(50%, 33vmin)
  }
  :after, :before {
    content: '';
    @place-cell: center;
    @size: 100%;
    background: radial-gradient(
      @p(#FFFDE1, #FB3569) @r(70%),
      transparent 0
    ) 
    @pn(30% 50%, 70% 50%, 50% 60%) / 
    @r(.1vmin, 5vmin) @lr() 
    no-repeat;
  }
  
  @place-cell: centerr;
  @size: 100%;
  
	will-change: transform;
  animation: r 4s linear infinite;
  animation-delay: calc(-4s / @size() * @i());

  --translate: translateY(calc(-66vmin / @size() * @i()));
  @keyframes r {
    from { transform: var(--translate) rotate(0) }
    to { transform: var(--translate) rotateZ(-1turn) }
  }
</css-doodle>

<css-doodle> 
	:doodle {
		@grid: 1x3 / 100vmax;
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
	}

	@size: 100% 150%;
	position: absolute;
  
	background: @m(100, (
		linear-gradient(transparent, @p(
      #FFFDE1@repeat(2, @p([0-9a-f])), 
      #FB3569@repeat(2, @p([0-9a-f])) 
    ))
		@r(0%, 100%) @r(0%, 100%) /
		@r(1px) @r(23vmin)
		no-repeat
	));

	will-change: transform;
	animation: f 20s linear calc(-20s / @size() * @i()) infinite;
	@keyframes f {
		from { transform: translateY(-100%) }
		to { transform: translateY(100%) }
	}
</css-doodle>

        </div>
        `;
    }
}
customElements.define('chasing-elemnt', ChasingElemnt);
