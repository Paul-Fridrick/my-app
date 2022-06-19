import './Meta.scss'

function Meta(props: {step: number}) {
    const { step } = props;
    const metas: Record<number, {material: string, dimensions: string, weight: string, electrification: string}> = {
        1: {
            material: "Copper",
            dimensions:"H 33 x W 15 x D 15",
            weight: "2,5 kg",
            electrification: "LED 10W | G9 | 220-240V | 50 Hz"
        },
        2: {
            material: "Iron",
            dimensions:"H 104 x W 132 x D 125",
            weight: "12,5 kg",
            electrification: "LED 12W | G9 | 220-240V | 50 Hz"
        },
        3: {
            material: "Iron",
            dimensions:"H 104 x W 132 x D 125",
            weight: "12,5 kg",
            electrification: "LED 12W | G9 | 220-240V | 50 Hz"
        }

    }
    return (
        <div className="Meta">
            <ul>
                <li><strong>Material:</strong> {metas[step].material}</li>
                <li><strong>Dimensions:</strong> {metas[step].dimensions}</li>
                <li><strong>Net Weight:</strong> {metas[step].weight}</li>
                <li><strong>Electrification:</strong> {metas[step].electrification}</li>
            </ul>

            <img src={`Lamp-${step}.png`}/>
        </div>
    );
}

export default Meta;

