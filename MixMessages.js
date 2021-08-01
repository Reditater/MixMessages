function randomNumber(num)
{
    return Math.floor(Math.random() * num);
}

const words = {
    heros: ["superman", "spiderman", "hulk", "captain america", "iron man"],
    death: ["soon", "tomorrow", "in around 10 years", "never", "now"],
}

function randomItem(key) {

    let item = randomNumber(words[key].length);
    return item;

}

for (const key in words)
{
    switch (key)
    {
        case "heros":
            console.log(`Your superhero is ${words[key][randomItem(key)]}`);
            break;

        case "death":
            console.log(`You will die ${words[key][randomItem(key)]}`);
            break;
    }
}
