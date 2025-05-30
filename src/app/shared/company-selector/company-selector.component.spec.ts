import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanySelectorComponent } from './company-selector/company-selector.component';
import { By } from '@angular/platform-browser';

describe('CompanySelectorComponent', () => {
  let component: CompanySelectorComponent;
  let fixture: ComponentFixture<CompanySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySelectorComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(CompanySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show selected company', () => {
    const name = fixture.debugElement.query(By.css('.selected-company .name')).nativeElement.textContent;
    expect(name).toContain('Company Name 1');
  });

  it('should open dropdown on click', () => {
    const trigger = fixture.debugElement.query(By.css('.selected-company'));
    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpen).toBeTrue();
    const dropdown = fixture.debugElement.query(By.css('.dropdown'));
    expect(dropdown).toBeTruthy();
  });

  it('should select another company', () => {
    component.isOpen = true;
    fixture.detectChanges();
    const options = fixture.debugElement.queryAll(By.css('.company-option'));
    options[1].nativeElement.click();
    fixture.detectChanges();
    expect(component.selectedCompany.name).toBe('Company Name 2 ...');
  });
}); 