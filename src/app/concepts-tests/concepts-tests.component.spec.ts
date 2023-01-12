import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConceptsTestsComponent } from './concepts-tests.component';
fdescribe('ConceptsTestsComponent', () => {
  let name: string;
  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>;

  //beforeEach => Serve para fazer alguma configuracao, ANTES DE RODAR CADA bloco 'it'.
  beforeEach(() => {
    name = 'Fred';
    console.log('before ==>');
    /**
     * TestBed vai dentro do beforeEach. tem que passar a configuracao do modulo da classe do 
     * teste nele.
     */
    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent],
      imports:[HttpClientTestingModule] // ==> caso precise trabalhar com Http.
    }).compileComponents();

    //cria o componente ConceptsTestsComponent
    fixture = TestBed.createComponent(ConceptsTestsComponent);

    //instancia o componente
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Seta algo uma vez só antes de rodar todos os blocos it.
  beforeAll(() => {
   localStorage.setItem('token', 'abcd1234');
  });


  it('Deve testar nome Fred', () => {
    expect(name).toContain('ed');
    expect(name).toBe('Fred');
    expect(name).toEqual('Fred');
    expect(name).toBeDefined();
    expect(name).toMatch('Fred');
  });

  it('Deve testar nome Carlos', () => {
    name = 'Carlos';
    expect(name).toContain('ar');
    expect(name).toBe('Carlos');
    expect(name).toEqual('Carlos');
    expect(name).toBeDefined();
    expect(name).toMatch('Carlos');
    expect(name).not.toEqual('Fred');
  });
  

  afterEach(() => {
    console.log('after -->> ')
  })
 

  /*
  let name: string;
  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>
  beforeEach(() => {
    console.log('before -->> ')
    name = 'Danilo'

    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent],
    }).compileComponents()


    fixture = TestBed.createComponent(ConceptsTestsComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  afterEach(() => {
    console.log('after -->> ')

    localStorage.removeItem('token')
  })

  beforeAll(() => {
    localStorage.setItem('token', 'uashduhashduas')
  })

  it('Deve ter um h1 na pagina', () => {
    localStorage.setItem('token', '8aud8us8ud8sau')
    expect(name).toContain('Danilo')
  })

  it('Deve ter um botão na pagina', () => {
    expect(name).toContain('Danilo')
  })

  it('Deve ter um botão na pagina', () => {
    expect(name).toContain('Danilo')

  })
  */
})
