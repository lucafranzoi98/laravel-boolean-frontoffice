# come usare form contatto

1. creare un account su mailtrap
2. copiare le credenziali da "email testing -> my inbox -> smtp settings"
    qui scegliere laravel 9+ tra le integrations

3. copiare le credenziali e incollarle nel file .env del backend, sostituendo quelle già presenti

## in backend
1. per creare un file in app -> mail
```bash
    php artisan make:mail < nome > 
```

2. nelle view o in layout creo una cartella mail e una wiew 'NewLeadMail.blade.php' questo file contiene la mail che viene ricevuta
    esempio : 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>

        Ciao Admin!

    </h1>

    <p>
        Hai ricevuto un nuovo messaggio da: <br>
        Name: {{ $lead->name }} <br>
        Email: {{ $lead->email }}
    </p>

    <p>
        Message: <br>
        {{ $lead->message }}
    </p>
</body>

</html>
```

3. vado nel NewLeadEmail ->
    dichiaro una variabile d'istanza in cui memorizzare i dati che gli utenti inseriscono nel form (slide n.6)
```php
public $lead;

    /**Create a new message instance.*/
  public function __construct($_lead)
  {
    $this->lead = $_lead;
    }
```
4. il metodo envelope lo uso per definire dettagli come :
    - oggetto del messaggio
    - indirizzo di risposta
```php
/** Get the message envelope.*/

  public function envelope(): Envelope{
      return new Envelope(
          subject: 'New Lead Email',
          replyTo: '',
      );}
```

5. la funzione content, mi permette di selezionare il "layout" della mail che voglio inviare
```php
/**Get the message content definition.*/
  public function content(): Content{
      return new Content(
          view: 'layouts.mail.new-lead-email',
        );}
```

6. creo il modello e la migrazione per salvare in database le email ->
```bash
php artisan make:model Lead -m
``` 
- nel modello sistemo le fillable
```php
class Lead extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'phone', 'message'];
}
```

7. nella migrazione creo la tabella che voglio nel database con i dati che servono
```php
public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('message');
            $table->timestamps();
        });
    }
```

8. lancio la migrazione 
```bash 
php artisan make:migrate
```

9. creo il controller
```bash
php artisan make:controller Api/LeadControlller
```

10. creo nel controller la funzione store per salvare i dati
    inizialmente faccio così per testare se il form mi invia i dati
```php
public function store(Request $request)
{
    dd(Request->all)
}
```

11. in api.php credo la rotta per intercettare i dati dal front-end
```php
Route::post('/contact',[LeadController::class,'store']);
```

### mi sposto nel front-end
1. nel form 
```html
<form action="" v-on:submit.prevent="sendForm()"></form>
```
- in methods
```javascript
data(){
    return{
        name:'',
        email:'',
        phone:'',
        messge:''
    }
},
methods: {
    sendForm(){
        /* per passare tutti i dati insieme */
     const payload = {
        name: this.name,
        email:this.email,
        phone:this.phone,
        message:this.message,
     }; 
     axios.post('qui inserisco indirizzo api', payload) /* .post('urlAPI',variabile) */
     .then( response => {
        console.log(response);
     })
 }
}
```
2. nel form creo i v-model
    devo associare ogni input al valore che ho nel data return ( es. input del name avra v-model="name")

### torno nel backend
1. vado in LeadController
```php
public function store(Request $request)
{
    return response()->json([
        'success':true,
        'result'=>$request->all()
    ]);
}
```
2. vado nel form e testo i dati, devo vedere nella console la risposta con i dati inseriti

3. torno in LeadController per validare i dati
```php
public function store(Request $request)
{

    $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email',
            'phone' => 'required',
            'message' => 'required',
        ]);
    
    return response()->json([
        'success':true,
        'result'=>$request->all()
    ]);
}
```